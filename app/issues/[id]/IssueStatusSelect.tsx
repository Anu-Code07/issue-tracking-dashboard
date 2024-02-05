"use client";

import { Skeleton } from "@/app/components";
import { Issue, User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { revalidatePath } from "next/cache";
import { usePathname } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const IssueStatusSelect = ({ issue }: { issue: Issue }) => {
  const assignIssue = (status: string) => {
    axios
      .patch("/api/issues/" + issue.id, {
        status: status || null,
      }).then(()=>{
        toast.success("values upated");
      })
      .catch(() => {
        toast.error("Changes could not be saved.");
      }).finally(()=>{
        
      });
  };

  return (
    <>
      <Select.Root
        defaultValue={issue.status || ""}
        onValueChange={assignIssue}
      >
        <Select.Trigger placeholder="Change Status" />
        <Select.Content>
          <Select.Group>
            <Select.Label>Status</Select.Label>
            <Select.Item value="OPEN">OPEN</Select.Item>
            <Select.Item  value={'IN_PROGRESS'}>
                {'IN PROGRESS'}
              </Select.Item>
              <Select.Item  value={'CLOSED'}>
                {'CLOSE'}
              </Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
      <Toaster />
    </>
  );
};



export default IssueStatusSelect;
