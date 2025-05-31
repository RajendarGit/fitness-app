"use client";
import React, { useEffect } from "react";
import { useAppSelector } from "@/hooks/redux";
import { useRouter } from "next/navigation";

const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const ComponentWithAuth = (props: P) => {
    const { isAuthenticated } = useAppSelector((state) => state.auth);
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated) {
        router.replace("/login");
      }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) {
      return null; // Or a loading spinner
    }

    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuth;
};

export default withAuth;
