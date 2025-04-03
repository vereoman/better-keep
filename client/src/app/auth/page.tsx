"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Auth() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<string | null>(null);

    const handleAuth = async (provider: "google" | "apple" | "github") => {
        try {
            setIsLoading(provider);

            const response = await fetch(`/api/auth/${provider}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error(`Authentication with ${provider} failed`);
            }

            const data = await response.json();

            if (data.redirectUrl) {
                window.location.href = data.redirectUrl;
            } else if (data.success) {
                router.push("/dashboard");
            }
        } catch (error) {
            console.error(`Error authenticating with ${provider}:`, error);
        } finally {
            setIsLoading(null);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-black">
            <div className="flex gap-8 justify-center">
                <Button
                    variant="secondary"
                    className="w-24 h-24 p-0 flex items-center justify-center cursor-pointer rounded-xl"
                    onClick={() => handleAuth("google")}
                    disabled={isLoading !== null}
                >
                    {isLoading === "google" ? (
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                    ) : (
                        <svg
                            width="60"
                            height="60"
                            viewBox="0 0 20 20"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="white"
                        >
                            <g
                                id="Page-1"
                                stroke="none"
                                strokeWidth="1"
                                fillRule="evenodd"
                            >
                                <g
                                    id="Dribbble-Light-Preview"
                                    transform="translate(-300.000000, -7399.000000)"
                                >
                                    <g
                                        id="icons"
                                        transform="translate(56.000000, 160.000000)"
                                    >
                                        <path
                                            d="M263.821537,7247.00386 L254.211298,7247.00386 C254.211298,7248.0033 254.211298,7250.00218 254.205172,7251.00161 L259.774046,7251.00161 C259.560644,7252.00105 258.804036,7253.40026 257.734984,7254.10487 C257.733963,7254.10387 257.732942,7254.11086 257.7309,7254.10986 C256.309581,7255.04834 254.43389,7255.26122 253.041161,7254.98137 C250.85813,7254.54762 249.130492,7252.96451 248.429023,7250.95364 C248.433107,7250.95064 248.43617,7250.92266 248.439233,7250.92066 C248.000176,7249.67336 248.000176,7248.0033 248.439233,7247.00386 L248.438212,7247.00386 C249.003881,7245.1669 250.783592,7243.49084 252.969687,7243.0321 C254.727956,7242.65931 256.71188,7243.06308 258.170978,7244.42831 C258.36498,7244.23842 260.856372,7241.80579 261.043226,7241.6079 C256.0584,7237.09344 248.076756,7238.68155 245.090149,7244.51127 L245.089128,7244.51127 C245.089128,7244.51127 245.090149,7244.51127 245.084023,7244.52226 L245.084023,7244.52226 C243.606545,7247.38565 243.667809,7250.75975 245.094233,7253.48622 C245.090149,7253.48921 245.087086,7253.49121 245.084023,7253.49421 C246.376687,7256.0028 248.729215,7257.92672 251.563684,7258.6593 C254.574796,7259.44886 258.406843,7258.90916 260.973794,7256.58747 C260.974815,7256.58847 260.975836,7256.58947 260.976857,7256.59047 C263.15172,7254.63157 264.505648,7251.29445 263.821537,7247.00386"
                                            id="google-[#178]"
                                        ></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    )}
                </Button>

                <Button
                    variant="secondary"
                    className="w-24 h-24 p-0 flex items-center justify-center cursor-pointer rounded-xl"
                    onClick={() => handleAuth("apple")}
                    disabled={isLoading !== null}
                >
                    {isLoading === "apple" ? (
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                    ) : (
                        <svg
                            width="60"
                            height="60"
                            viewBox="-52.01 0 560.035 560.035"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="white"
                        >
                            <path
                                d="M380.844 297.529c.787 84.752 74.349 112.955 75.164 113.314-.622 1.988-11.754 40.191-38.756 79.652-23.343 34.117-47.568 68.107-85.731 68.811-37.499.691-49.557-22.236-92.429-22.236-42.859 0-56.256 21.533-91.753 22.928-36.837 1.395-64.889-36.891-88.424-70.883-48.093-69.53-84.846-196.475-35.496-282.165 24.516-42.554 68.328-69.501 115.882-70.192 36.173-.69 70.315 24.336 92.429 24.336 22.1 0 63.59-30.096 107.208-25.676 18.26.76 69.517 7.376 102.429 55.552-2.652 1.644-61.159 35.704-60.523 106.559M310.369 89.418C329.926 65.745 343.089 32.79 339.498 0 311.308 1.133 277.22 18.785 257 42.445c-18.121 20.952-33.991 54.487-29.709 86.628 31.421 2.431 63.52-15.967 83.078-39.655"
                                fill="currentColor"
                            />
                        </svg>
                    )}
                </Button>

                <Button
                    variant="secondary"
                    className="w-24 h-24 p-0 flex items-center justify-center cursor-pointer rounded-xl"
                    onClick={() => handleAuth("github")}
                    disabled={isLoading !== null}
                >
                    {isLoading === "github" ? (
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                    ) : (
                        <svg
                            width="60"
                            height="60"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-black dark:text-white"
                        >
                            <g
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                            >
                                <g
                                    transform="translate(-140.000000, -7559.000000)"
                                    fill="white"
                                >
                                    <g transform="translate(56.000000, 160.000000)">
                                        <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    )}
                </Button>
            </div>
        </div>
    );
}
