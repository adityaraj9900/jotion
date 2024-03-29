import { Settings } from "lucide-react";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

export const SettingButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          role="button"
          className="px-4 py-2 text-sm w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium rounded-md"
        >
          <Settings className="shrink-0 h-[18px] w-[18px] mr-2 text-muted-foreground" />
          <span className="truncate">Settings</span>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="border-b pb-3 text-muted-foreground">
          <h2 className="text-lg font-medium">My settings</h2>
        </DialogHeader>
        <div className="flex items-center justify-between text-muted-foreground">
          <div className="flex flex-col gap-y-1">
            <Label>Appearance</Label>
            <span className="text-[0.8rem] text-muted-foreground">
              Customize how Jotion looks on your device
            </span>
          </div>
          <ModeToggle />
        </div>
      </DialogContent>
    </Dialog>
  );
};
