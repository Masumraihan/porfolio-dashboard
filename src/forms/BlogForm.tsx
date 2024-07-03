"use client";
import { Input } from "@/components/ui/input";
import TextEditor from "./TextEditor";
import { useState } from "react";
import fetcher from "@/helpers/fetcher";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const submitBLog = async () => {
    try {
      const res = await fetcher(`${process.env.NEXT_PUBLIC_API_BASE_URL}/blog/create-blog`, {
        method: "POST",
        body: JSON.stringify({
          title,
          content,
        }),
      });

      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='w-full space-y-3 py-7'>
      <>
        <Input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder='Title'
          type='text'
        />
        <TextEditor defaultValue={content} onChange={setContent} />
        <Button onClick={submitBLog} className='w-full'>
          Publish
        </Button>
      </>
    </div>
  );
};

export default BlogForm;
