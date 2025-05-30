"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useAppDispatch, useAppSelector } from "@/hooks/redux"
import { loginStart, loginSuccess, loginFailure, clearError } from "@/store/slices/authSlice"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Dumbbell, Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const { isLoading, error, isAuthenticated } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/")
    }
  }, [isAuthenticated, router])

  useEffect(() => {
    dispatch(clearError())
  }, [dispatch])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(loginStart())

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock authentication - in real app, this would be an API call
      if (email === "demo@boosterpower.com" && password === "password") {
        dispatch(
          loginSuccess({
            id: "1",
            email: email,
            name: "Demo User",
          }),
        )
      } else {
        dispatch(loginFailure("Invalid email or password"))
      }
    } catch (err) {
      dispatch(loginFailure("Login failed. Please try again."))
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 px-4">
      <Card className="w-full max-w-md bg-teal-800/90 border-teal-600/30 backdrop-blur-sm">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Dumbbell className="h-12 w-12 text-orange-500" />
          </div>
          <CardTitle className="text-2xl font-black text-white uppercase tracking-wider">Welcome Back</CardTitle>
          <CardDescription className="text-teal-200">Sign in to your Booster Power account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert variant="destructive" className="bg-red-900/50 border-red-500/50 text-red-200">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <Label htmlFor="email" className="text-white font-bold uppercase text-sm">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-teal-700 border-teal-600 text-white placeholder-teal-300"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-white font-bold uppercase text-sm">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-teal-700 border-teal-600 text-white placeholder-teal-300"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent text-teal-300 hover:text-white"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase tracking-wide"
              disabled={isLoading}
            >
              {isLoading ? "SIGNING IN..." : "SIGN IN"}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <p className="text-teal-200">
              {"Don't have an account? "}
              <Link href="/register" className="text-orange-500 hover:text-orange-400 font-bold uppercase">
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
    </div>
  )
}
