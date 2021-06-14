import ThreeDots from "./ThreeDots";
import clsx from "clsx";

const Exlamation = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 20 20"
		width="20"
		height="20"
		{...props}
	>
		<path
			fillRule="evenodd"
			d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
			clipRule="evenodd"
		/>
	</svg>
);
export default function Loading({ isError, msg }) {
	msg = typeof msg === "string" ? msg : undefined;
	return (
		<div class="p-2 flex justify-center items-center">
			<span
				class={clsx(
					[isError ? "text-red-500" : "text-gray-700"],
					"font-bold mr-2"
				)}
			>
				{isError
					? msg
						? msg
						: "Error while loading."
					: msg
					? msg
					: "Loading."}
			</span>
			{isError ? (
				<Exlamation class="text-red-500 fill-current" />
			) : (
				<ThreeDots class="h-6 w-8 fill-current text-gray-700" />
			)}
		</div>
	);
}