import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Notebook, Archive, Trash2, ListCheck, Code } from "lucide-react";

export default function Home() {
    return (
        <div className="p-8 flex flex-col items-center justify-center h-screen bg-black">
            <div className="flex space-x-8">
                <Link href="/note">
                    <Button
                        variant="secondary"
                        className="w-32 h-32 flex flex-col items-center justify-center cursor-pointer"
                    >
                        <Notebook className="size-6" />
                    </Button>
                </Link>
                <Link href="/code">
                    <Button
                        variant="secondary"
                        className="w-32 h-32 flex flex-col items-center justify-center cursor-pointer"
                    >
                        <Code className="size-6" />
                    </Button>
                </Link>
                <Link href="/list">
                    <Button
                        variant="secondary"
                        className="w-32 h-32 flex flex-col items-center justify-center cursor-pointer"
                    >
                        <ListCheck className="size-6" />
                    </Button>
                </Link>
                <Link href="/archive">
                    <Button
                        variant="secondary"
                        className="w-32 h-32 flex flex-col items-center justify-center cursor-pointer"
                    >
                        <Archive className="size-6" />
                    </Button>
                </Link>
                <Link href="/trash">
                    <Button
                        variant="secondary"
                        className="w-32 h-32 flex flex-col items-center justify-center cursor-pointer"
                    >
                        <Trash2 className="size-6" />
                    </Button>
                </Link>
                <Link href="/auth">
                    <Button
                        variant="secondary"
                        className="w-32 h-32 flex flex-col items-center justify-center cursor-pointer"
                    >
                        <Trash2 className="size-6" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
