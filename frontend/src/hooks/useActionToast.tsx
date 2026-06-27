"use client";

import { useEffect } from "react";
import { toast } from "sonner";

export function useActionToast(result: any) {
  useEffect(() => {
    if (!result?.message) return;

    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  }, [result]);
}