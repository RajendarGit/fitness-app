"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  loginStart,
  loginSuccess,
  loginFailure,
  clearError,
} from "@/store/slices/authSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Dumbbell, Eye, EyeOff } from "lucide-react";
import Wrapper from "@/components/wrapper";
import Container from "@/components/container";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginSchema } from "@/schema/login";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const { isLoading, error, isAuthenticated } = useAppSelector(
    (state) => state.auth
  );
  const dispatch = useAppDispatch();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const onSubmit = (data: LoginSchema) => {
    dispatch(loginStart());
    // Simulate API call
    setTimeout(() => {
      if (data.email === "demo@boosterpower.com" && data.password === "password") {
        dispatch(
          loginSuccess({
            id: "1",
            email: data.email,
            name: "Rajendar",
          })
        );
      } else {
        dispatch(loginFailure("Invalid email or password"));
      }
    }, 1000);
  };

  return (
    <Wrapper className="min-h-screen bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 px-4">
      <Container className="flex items-center justify-center pt-20">
        <Card className="w-full max-w-md bg-teal-800/90 border-teal-600/30 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Dumbbell className="h-12 w-12 text-orange-500" />
            </div>
            <CardTitle className="text-2xl font-black text-white uppercase tracking-wider">
              Welcome Back
            </CardTitle>
            <CardDescription className="text-teal-200">
              Sign in to your Booster Power account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {error && (
                <Alert
                  variant="destructive"
                  className="bg-red-900/50 border-red-500/50 text-red-200"
                >
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-white font-bold uppercase text-sm"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  {...register("email")}
                  className="bg-teal-700 border-teal-600 text-white placeholder-teal-300"
                  required
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-white font-bold uppercase text-sm"
                >
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    {...register("password")}
                    className="bg-teal-700 border-teal-600 text-white placeholder-teal-300"
                    required
                  />
                  {errors.password && (
                    <p className="text-red-400 text-xs mt-1">{errors.password.message}</p>
                  )}
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent text-teal-300 hover:text-white"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full"
              >
                {isLoading ? "SIGNING IN..." : "SIGN IN"}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <p className="text-teal-200">
                {"Don't have an account? "}
                <Link
                  href="/register"
                  className="text-primary hover:text-primary/50 font-bold uppercase"
                >
                  Sign up
                </Link>
              </p>
            </div>

            <div className="mt-4 p-3 bg-teal-900/50 rounded-lg border border-teal-600/30">
              <p className="text-sm text-teal-200 text-center">
                <strong className="text-orange-500">Demo credentials:</strong>
                <br />
                Email: demo@boosterpower.com
                <br />
                Password: password
              </p>
            </div>
          </CardContent>
        </Card>
      </Container>
    </Wrapper>
  );
}
