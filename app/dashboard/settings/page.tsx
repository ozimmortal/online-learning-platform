"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {changePassword, updateUser,useSession} from '@/lib/auth-client';
import { use, useState } from "react";
export default function SettingsPage() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [name,setName] = useState("");
  const [img,setImg] = useState("");
  
  const session = useSession();
  async function ChangeProfile() {
    await updateUser({
      name: name,
      image: img
    })
  }
  async function handlePasswordChange() {
    if(newPassword == confirmPassword) {
      await changePassword({
        newPassword: newPassword,
        currentPassword: currentPassword,
        revokeOtherSessions: true, 
    });
  }}

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>
      <Tabs defaultValue="profile">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <Card className="p-6">
            <div className="space-y-6">
              <div className="space-y-4">
              <div className="space-y-2">
                  <Label htmlFor="name">Image Url</Label>
                  <Input id="name" placeholder={session?.data?.user.image || "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"} onChange={(e) => setImg(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder={session?.data?.user.name ||"CN"}  onChange={(e) => setName(e.target.value)}/>
                </div>
                <Button onClick={ChangeProfile}>Save Changes</Button>
              </div>
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="account">
          <Card className="p-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password"  onChange={(e) => setCurrentPassword(e.target.value)}/>
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" onChange={(e) => setNewPassword(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
              </div>
              <Button onClick={handlePasswordChange}>Update Password</Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}