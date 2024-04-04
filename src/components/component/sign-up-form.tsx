'use client'
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";

interface SignUpFormProps {}

export const SignUpForm: React.FC<SignUpFormProps> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState<boolean>(false);
  const [passwordMatchError, setPasswordMatchError] = useState<string>("");

  const togglePasswordVisibility = (): void => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = (): void => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
    setPasswordMatchError("");
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setConfirmPassword(e.target.value);
    if (password !== e.target.value) {
      setPasswordMatchError("Password not matched");
    } else {
      setPasswordMatchError("");
    }
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Sign up</CardTitle>
        <CardDescription>Create a new account </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="space-y-4">
            <div>
              <Label
                className="block text-sm font-medium"
                htmlFor="full-name"
              >
                Your Full Name
              </Label>
              <Input
                className="mt-1"
                id="full-name"
                required
                placeholder="Your full name"
              />
            </div>
            <div>
              <Label htmlFor="email"> Email</Label>
              <Input
                className="mt-1"
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  placeholder="Enter your password"
                  required
                  type={isPasswordVisible ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none"
                  onClick={togglePasswordVisibility}
                >
                  {isPasswordVisible ? <RiEyeOffFill /> : <RiEyeFill />}
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Label htmlFor="confirm-password">Confirm Password</Label>
              </div>
              <div className="relative">
                <Input
                  id="confirm-password"
                  placeholder="Re-enter your password"
                  required
                  type={isConfirmPasswordVisible ? "text" : "password"}
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
                <button
                  className="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {isConfirmPasswordVisible ? <RiEyeOffFill /> : <RiEyeFill />}
                </button>
              </div>
              {passwordMatchError && (
                <label className="text-red-500">{passwordMatchError}</label>
              )}
            </div>
            <Button className="w-full" type="submit">
              Sign up
            </Button>
            <p>
              Do you have an account?{" "}
              <Link className="text-[#007AFF] hover:underline" href="/signin">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
