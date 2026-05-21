"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  KeyRound,
  Smartphone,
  Shield,
  AlertTriangle,
  CheckCircle,
  Clock,
  LogOut,
  RefreshCw,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HeroSection } from "@/components/careers/hero-section";

export default function SecuritySettingsPage() {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [sessionTimeout, setSessionTimeout] = useState(30);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const securityEvents = [
    {
      event: "Password Changed",
      date: "March 5, 2025",
      location: "San Francisco, CA",
      device: "Chrome on macOS",
    },
    {
      event: "Login",
      date: "March 3, 2025",
      location: "San Francisco, CA",
      device: "Chrome on macOS",
    },
    {
      event: "Failed Login Attempt",
      date: "February 28, 2025",
      location: "New York, NY",
      device: "Firefox on Windows",
    },
  ];

  const activeSessions = [
    {
      device: "Chrome on macOS",
      location: "San Francisco, CA",
      lastActive: "Active now",
      current: true,
    },
    {
      device: "Mobile App on iPhone",
      location: "San Francisco, CA",
      lastActive: "3 hours ago",
      current: false,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        variant="left"
        contentClassName="max-w-4xl"
        sectionClassName="pb-16 md:pb-20"
        leadingAccessory={
          <Link
            href="/dashboard"
            className="inline-flex items-center text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        }
        title="Account Security"
        highlightedWord="Security"
        subtitle="Manage your account security settings and monitor activity"
        belowContent={
          <div className="mx-auto mt-12 w-full max-w-4xl pb-12">
            <Tabs defaultValue="settings" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="settings">Security Settings</TabsTrigger>
                <TabsTrigger value="sessions">Active Sessions</TabsTrigger>
                <TabsTrigger value="activity">Activity Log</TabsTrigger>
              </TabsList>

              <TabsContent value="settings" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center">
                      <KeyRound className="h-5 w-5 mr-2 text-secondary" />
                      <CardTitle>Password</CardTitle>
                    </div>
                    <CardDescription>
                      Update your password to keep your account secure
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">
                        Confirm New Password
                      </Label>
                      <Input id="confirm-password" type="password" />
                    </div>

                    <div className="bg-muted rounded-lg p-3 text-sm text-muted-foreground">
                      <p className="font-medium mb-2">Password requirements:</p>
                      <ul className="space-y-1">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                          Minimum 8 characters
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                          At least one uppercase letter
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                          At least one number
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                          At least one special character
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="bg-secondary hover:bg-secondary/90">
                      Update Password
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center">
                      <Smartphone className="h-5 w-5 mr-2 text-secondary" />
                      <CardTitle>Two-Factor Authentication</CardTitle>
                    </div>
                    <CardDescription>
                      Add an extra layer of security to your account
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <h4 className="font-medium">
                          Enable Two-Factor Authentication
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Receive a verification code on your mobile device when
                          signing in
                        </p>
                      </div>
                      <Switch
                        checked={twoFactorEnabled}
                        onCheckedChange={setTwoFactorEnabled}
                      />
                    </div>

                    {twoFactorEnabled && (
                      <div className="border rounded-lg p-4 mt-4">
                        <h4 className="font-medium mb-2">
                          Set Up Two-Factor Authentication
                        </h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          Use an authenticator app like Google Authenticator or
                          Authy to scan this QR code
                        </p>
                        <div className="bg-white p-4 rounded-lg w-48 h-48 mx-auto mb-4 flex items-center justify-center">
                          <div className="text-center text-sm text-muted-foreground">
                            [QR Code Placeholder]
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="verification-code">
                            Enter Verification Code
                          </Label>
                          <Input id="verification-code" placeholder="123456" />
                        </div>
                        <Button className="w-full mt-4 bg-secondary hover:bg-secondary/90">
                          Verify and Enable
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 mr-2 text-secondary" />
                      <CardTitle>Additional Security</CardTitle>
                    </div>
                    <CardDescription>
                      Configure additional security settings for your account
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <h4 className="font-medium">Security Notifications</h4>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications for suspicious login attempts
                        </p>
                      </div>
                      <Switch
                        checked={notificationsEnabled}
                        onCheckedChange={setNotificationsEnabled}
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="session-timeout">
                          Session Timeout (minutes)
                        </Label>
                        <span className="text-sm text-muted-foreground">
                          {sessionTimeout}{" "}
                          {sessionTimeout === 1 ? "minute" : "minutes"}
                        </span>
                      </div>
                      <Input
                        id="session-timeout"
                        type="range"
                        min="5"
                        max="60"
                        step="5"
                        value={sessionTimeout}
                        onChange={(e) =>
                          setSessionTimeout(Number(e.target.value))
                        }
                      />
                      <p className="text-xs text-muted-foreground">
                        Automatically log out after period of inactivity
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="sessions">
                <Card>
                  <CardHeader>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-secondary" />
                      <CardTitle>Active Sessions</CardTitle>
                    </div>
                    <CardDescription>
                      View and manage your active sessions across different
                      devices
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {activeSessions.map((session, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 border rounded-lg"
                        >
                          <div className="space-y-1">
                            <div className="flex items-center">
                              <h4 className="font-medium">{session.device}</h4>
                              {session.current && (
                                <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                                  Current
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Location: {session.location}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Last active: {session.lastActive}
                            </p>
                          </div>
                          {!session.current && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex items-center"
                            >
                              <LogOut className="h-4 w-4 mr-2" />
                              Revoke
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="destructive" className="w-full">
                      Log Out of All Other Devices
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="activity">
                <Card>
                  <CardHeader>
                    <div className="flex items-center">
                      <AlertTriangle className="h-5 w-5 mr-2 text-secondary" />
                      <CardTitle>Security Activity</CardTitle>
                    </div>
                    <CardDescription>
                      Recent security-related activities on your account
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {securityEvents.map((event, index) => (
                        <div key={index} className="p-4 border rounded-lg">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-medium">{event.event}</h4>
                              <p className="text-sm text-muted-foreground">
                                {event.date} · {event.location}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                Device: {event.device}
                              </p>
                            </div>
                            {event.event === "Failed Login Attempt" && (
                              <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-medium">
                                Suspicious
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" className="flex items-center">
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Refresh
                    </Button>
                    <Button variant="outline">View Full History</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        }
      />
    </div>
  );
}
