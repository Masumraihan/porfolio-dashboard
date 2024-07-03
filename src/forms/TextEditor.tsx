"use client";
import JoditEditor from "jodit-react";
import { useEffect, useMemo, useRef, useState } from "react";

type TTextEditorProps = {
  placeholder?: string;
  onChange?: (content: string) => void;
  onBlur?: (content: string) => void;
  props?: any;
  defaultValue?: string;
};

const TextEditor = ({ placeholder, onBlur, onChange, defaultValue, props }: TTextEditorProps) => {
  const editor = useRef(null);
  const [content, setContent] = useState(defaultValue);

  useEffect(() => {
    if (defaultValue) {
      setContent(defaultValue);
    }
  }, [defaultValue]);

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder || "Start typing...",
    }),
    [placeholder],
  );

  return (
    <JoditEditor
      className='dark:text-muted w-full h-full'
      {...props}
      ref={editor}
      value={content}
      config={config}
      onBlur={(newContent: string) => {
        setContent(newContent);
        onBlur && onBlur(newContent);
      }}
      onChange={(newContent: string) => {
        setContent(newContent);
        onChange && onChange(newContent);
      }}
    />
  );
};

export default TextEditor;
