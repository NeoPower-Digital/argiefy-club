import { Inbox, Plane, Send } from "lucide-react";
import { Button } from "../ui/button";

const BalanceAndActions = () => {
  return (
    <div className="space-y-4 px-2">
      <div>
        <p className="text-muted-foreground text-lg">Your balance</p>
        <p className="text-3xl font-bold">
          $3,548 <span className="text-muted-foreground">.46</span>
        </p>
      </div>

      <div className="flex gap-4 w-full max-w-md">
        <Button className="w-48 gap-2">
          <Inbox /> Receive
        </Button>
        <Button className="w-48 gap-2">
          <Send /> Send
        </Button>
      </div>
    </div>
  );
};

export default BalanceAndActions;
