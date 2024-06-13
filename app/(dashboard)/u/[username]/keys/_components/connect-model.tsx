"use client";

import { toast } from "sonner";
import { AlertTriangle } from "lucide-react";
import { useState, useTransition, useRef, ElementRef } from "react";

import { createIngress } from "@/actions/ingress";
import { Button } from "@/components/ui/button";

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { 
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert";

import { 
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const IngressInputs = {
    RTMP_INPUT: "RTMP",
    WHIP_INPUT: "WHIP",
};

const RTMP = IngressInputs.RTMP_INPUT;
const WHIP = IngressInputs.WHIP_INPUT;

type IngressInput = typeof RTMP | typeof WHIP;

export const ConnectModel = () => {

    const closeRef = useRef<ElementRef<"button">>(null);
    const [isPending, startTransition] = useTransition();
    const [ingressType, setIngressType] = useState<IngressInput>(RTMP);

    const onSubmit = () => {
        startTransition(() => {
            createIngress(parseInt(ingressType))
            .then(() => {
                toast.success("Ingress created");
                closeRef?.current?.click();
            })
            .catch(() => toast.error("Something went wrong"));
        });
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="primary">
                    Generate connection
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Generate connection
                    </DialogTitle>
                </DialogHeader>
                <Select
                    disabled={isPending}
                    value={ingressType}
                    onValueChange={(value) => setIngressType(value as IngressInput)}
                >
                    <SelectTrigger className="w-full" style={{ borderWidth: '0.5px', borderColor: 'rgba(128, 128, 128, 0.5)' }}>
                        <SelectValue placeholder="Ingress Type" />
                    </SelectTrigger>
                    <SelectContent style={{ borderWidth: '0.5px', borderColor: 'rgba(128, 128, 128, 0.5)', backgroundColor: 'hsl(226.7, 12.7%, 13.9%)' }}>
                        <SelectItem value={RTMP}>RTMP</SelectItem>
                        <SelectItem value={WHIP}>WHIP</SelectItem>
                    </SelectContent>
                </Select>
                <Alert style={{ borderWidth: '0.5px', borderColor: 'rgba(128, 128, 128, 0.5)' }}>
                    <AlertTriangle className="h-4 w-4" style={{ color: 'red' }} />
                    <AlertTitle style={{ color: 'red' }} >Warning!</AlertTitle>
                    <AlertDescription>
                        This Action will Reset all Active Streams using the Current Connection
                    </AlertDescription>
                </Alert>
                <div className="flex justify-between">
                    <DialogClose ref={closeRef} asChild>
                        <Button variant="ghost">
                            Cancel
                        </Button>
                    </DialogClose>
                    <Button
                        disabled={isPending}
                        onClick={onSubmit}
                        variant="primary"
                    >
                        Generate
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};
