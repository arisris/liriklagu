import { Fragment } from "preact";
import { useState } from "preact/hooks";
import { Link } from "wouter-preact";
import clsx from "clsx";
import { letters } from "../lib/utils";

export default ({ children }) => {
	const [toggled, toggle] = useState(false);
	const handleClickMenu = (e) => {
		toggle(!toggled);
		e.preventDefault();
	};
	const NavLink = ({ href, children }) => {
		return (
			<Link
				class={clsx(
					{
						"w-full text-center": toggled,
					},
					"block hover:bg-gray-800 px-4 py-2"
				)}
				href={href}
			>
				{children}
			</Link>
		);
	};
	return (
		<section class="absolute flex flex-col justify-between w-full h-full">
			<header class="block bg-gray-700 text-white">
				<nav class="flex justify-between items-center sm:max-w-screen-lg m-auto">
					<Link class="block hover:bg-gray-800 px-4 py-2" href="/">
						Lagu
					</Link>
					<a
						class={clsx(
							{
								"absolute right-0 z-20": toggled,
							},
							"sm:hidden hover:bg-gray-800 px-4 py-2"
						)}
						href="#menu"
						onclick={handleClickMenu}
					>
						{toggled ? "Close" : "Menu"}
					</a>
					<div
						class={clsx(
							{
								hidden: !toggled,
								"absolute flex flex-col justify-center items-center inset-0 w-full h-full bg-gray-700 z-10": toggled,
							},
							"sm:flex sm:flex-row"
						)}
					>
						<NavLink href={"/about"}>About</NavLink>
					</div>
				</nav>
				<div class="flex flex-col justify-center items-center p-2">
					<h1 class="text-3xl my-3 tracking-widest font-bold">Browse Artist</h1>
					<div class="flex justify-center flex-wrap">
						{letters.map((letter) => {
							const olet = letter;
							if (letter == 19) letter = letter.split("").join("-");
							return (
								<Link
									class="flex items-center justify-center flex-nowrap w-8 h-8 m-1 border border-gray-600 hover:bg-gray-800 rounded"
									href={"/browse/" + olet}
								>
									{letter.toUpperCase()}
								</Link>
							);
						})}
					</div>
				</div>
			</header>
			<main class="flex-auto">
				<div class="max-w-screen-lg m-auto">{children}</div>
			</main>
			<footer className="text-center px-4 mt-4">
				<div className="italic text-md">
					<div className="ml-1">
						Made With{" "}
						<a
							href="https://preactjs.com"
							target="__blank"
							className="text-purple-900"
						>
							Preact
						</a>{" "}
						&amp;{" "}
						<a
							href="https://tailwindcss.com"
							target="__blank"
							className="text-red-900"
						>
							Tailwindcss
						</a>
					</div>
					<span>@Dev By </span>
					<Link href="/">
						<a href="https://github.com/arisris" className="ml-1 text-blue-900">
							Aris Riswanto
						</a>
					</Link>
				</div>
			</footer>
		</section>
	);
};
