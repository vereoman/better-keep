import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <div className="p-8 flex flex-col items-center justify-center h-screen">
            <div className="flex space-x-4">
                <Link href="/notes">
                    <Button
                        variant="secondary"
                        className="cursor-pointer text-md font-mono px-5 py-5"
                    >
                        Notes
                    </Button>
                </Link>
                <Link href="/archive">
                    <Button
                        variant="secondary"
                        className="cursor-pointer text-md font-mono px-5 py-5"
                    >
                        Archive
                    </Button>
                </Link>
                <Link href="/trash">
                    <Button
                        variant="secondary"
                        className="cursor-pointer text-md font-mono px-5 py-5"
                    >
                        Trash
                    </Button>
                </Link>
            </div>
        </div>
    );
}
