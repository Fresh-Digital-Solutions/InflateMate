"use client"

import { Waitlist } from "@clerk/nextjs";

export default function WaitlistPage() {
    return (
        <div className="flex flex-col items-center max-w-md mx-auto">

                <Waitlist 
                    afterJoinWaitlistUrl="/"
                    signInUrl="/sign-in"
                    appearance={{
                        elements: {
                            formButtonPrimary: 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl transition-all',
                            card: 'rounded-xl border-none shadow-none',
                            headerTitle: 'text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent',
                            formFieldInput: 'rounded-lg border-gray-200 focus:border-purple-400 focus:ring-purple-400',
                            footer: 'text-gray-500',
                            dividerLine: 'bg-gradient-to-r from-transparent via-gray-300 to-transparent',
                            dividerText: 'text-gray-400'
                        }
                    }}
                />
        </div>
    );
}