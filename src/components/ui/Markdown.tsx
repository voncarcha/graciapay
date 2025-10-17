"use client";

import React from "react";

type MarkdownProps = {
  content: string;
  className?: string;
};

const Markdown: React.FC<MarkdownProps> = ({ content, className = "" }) => {
  const lines = content.split(/\r?\n/);

  const elements = lines.map((line, index) => {
    const trimmed = line.trim();

    if (trimmed.length === 0) {
      return (
        <div key={`br-${index}`} className="h-4" aria-hidden="true" />
      );
    }

    // Unordered list item (starts with - or *)
    if (/^[-*]\s+/.test(trimmed)) {
      const text = trimmed.replace(/^[-*]\s+/, "");
      return (
        <li key={`li-${index}`} className="ml-6 mb-2 list-disc text-left last:mb-0">
          {text}
        </li>
      );
    }

    // Numbered list item (e.g., 1. 2.)
    if (/^\d+\.\s+/.test(trimmed)) {
      const text = trimmed.replace(/^\d+\.\s+/, "");
      return (
        <li key={`oli-${index}`} className="ml-6 mb-2 list-decimal text-left last:mb-0">
          {text}
        </li>
      );
    }

    // Heading styles (#, ##, ###)
    if (/^###\s+/.test(trimmed)) {
      return (
        <h3 key={`h3-${index}`} className="text-xl font-[700] mt-4">
          {trimmed.replace(/^###\s+/, "")}
        </h3>
      );
    }
    if (/^##\s+/.test(trimmed)) {
      return (
        <h2 key={`h2-${index}`} className="text-2xl font-[800] mt-6">
          {trimmed.replace(/^##\s+/, "")}
        </h2>
      );
    }
    if (/^#\s+/.test(trimmed)) {
      return (
        <h1 key={`h1-${index}`} className="text-3xl font-[900] mt-8">
          {trimmed.replace(/^#\s+/, "")}
        </h1>
      );
    }

    // Regular paragraph
    return (
      <p key={`p-${index}`} className="font-[400] text-left">
        {trimmed}
      </p>
    );
  });

  // Group adjacent list items into <ul>/<ol>
  const grouped: React.ReactNode[] = [];
  let buffer: Array<React.ReactElement> = [];
  let listType: "ul" | "ol" | null = null;

  elements.forEach((el) => {
    if (!React.isValidElement(el)) {
      grouped.push(el);
      return;
    }

    const isLi = el.type === "li";
    const classNameForLi = isLi
      ? String(((el.props as { className?: string })?.className) || "")
      : "";
    const isDecimal = isLi && classNameForLi.includes("list-decimal");

    if (isLi) {
      const currentType: "ul" | "ol" = isDecimal ? "ol" : "ul";
      if (listType === null) {
        listType = currentType;
        buffer.push(el);
      } else if (listType === currentType) {
        buffer.push(el);
      } else {
        // flush previous list and start new
        grouped.push(
          listType === "ol" ? (
            <ol key={`ol-${grouped.length}`} className="my-4 pl-1">
              {buffer}
            </ol>
          ) : (
            <ul key={`ul-${grouped.length}`} className="my-4 pl-1">
              {buffer}
            </ul>
          )
        );
        buffer = [el];
        listType = currentType;
      }
      return;
    }

    // flush list when encountering non-li
    if (buffer.length > 0 && listType) {
      grouped.push(
        listType === "ol" ? (
          <ol key={`ol-${grouped.length}`} className="my-4 pl-1">
            {buffer}
          </ol>
        ) : (
          <ul key={`ul-${grouped.length}`} className="my-4 pl-1">
            {buffer}
          </ul>
        )
      );
      buffer = [];
      listType = null;
    }

    grouped.push(el);
  });

  if (buffer.length > 0 && listType) {
    grouped.push(
      listType === "ol" ? (
        <ol key={`ol-${grouped.length}`} className="my-4 pl-1">
          {buffer}
        </ol>
      ) : (
        <ul key={`ul-${grouped.length}`} className="my-4 pl-1">
          {buffer}
        </ul>
      )
    );
  }

  return (
    <div className={`prose max-w-none text-left ${className}`}>
      {grouped}
    </div>
  );
};

export default Markdown;


