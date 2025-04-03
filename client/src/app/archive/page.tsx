import { 
    Card, 
    CardContent, 
    CardHeader, 
    CardTitle 
} from "@/components/ui/card";

const archived = {
    id: "1",
    title: "Archived Note",
    content:
        "This is an archived note that was previously important but is now stored for reference.",
};

export default function Archive() {
    return (
        <div className="p-4 flex justify-center items-center min-h-screen">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <CardTitle className="font-mono">
                        {archived.title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                    <p className="font-mono">{archived.content}</p>
                </CardContent>
            </Card>
        </div>
    );
}
