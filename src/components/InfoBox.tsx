import { ParentComponent } from "solid-js";

import info from "~/assets/icons/info.svg";

export const InfoBox: ParentComponent<{
    accent: "red" | "blue" | "green" | "white";
}> = (props) => {
    return (
        <div
            class="grid grid-cols-[auto_minmax(0,_1fr)] gap-4 rounded-xl border bg-neutral-950/50 px-4 py-2 md:p-4"
            classList={{
                "border-m-red": props.accent === "red",
                "border-m-blue bg-m-blue/10": props.accent === "blue",
                "border-m-green": props.accent === "green",
                "border-white": props.accent === "white"
            }}
        >
            <div class="self-center">
                <img src={info} alt="info" class="h-8 w-8" />
            </div>
            <div class="flex items-center">
                <p class="text-sm font-light">{props.children}</p>
            </div>
        </div>
    );
};
