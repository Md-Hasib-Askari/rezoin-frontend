'use client'
import React, { useState } from "react";
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";

interface SignInFormProps {}

export const SignInForm: React.FC<SignInFormProps> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = (): void => {
    setIsVisible(!isVisible);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };


  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Sign in</CardTitle>
        <CardDescription>Enter email and password</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Enter your email"
                required
                type="email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  className="ml-auto inline-block text-sm hover:underline"
                  href="#"
                >
                  Forgot password?
                </Link>
              </div>
              
              <div className="relative">
                <Input
                  id="password"
                  placeholder="Enter your password"
                  required
                  type={isVisible ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none"
                  onClick={toggleVisibility}
                >
                  {isVisible ? <RiEyeOffFill /> : <RiEyeFill />}
                </button>
              </div>
            </div>
            <Button className="w-full" type="submit">
              Sign in
            </Button>
            <p>
              Do you have an account?{" "}
              <Link href="/signup" className="text-[#007AFF] hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
