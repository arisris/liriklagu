import { useEffect, useState, useMemo } from "preact/hooks";
import { useLirik } from "../hooks/lirik";
import { Link, useLocation } from "wouter-preact";
import Loading from "./Loading";
import { paginateArray } from "../lib/utils";

const useDocumentTitle = title => {
	useEffect(() => {
		document.title = title;
	}, [title]);
}

export function SegmentList({ segment, page }) {
	page = parseInt(page) || 1;
	const { error, isLoading, data } = useLirik(segment);
	const [location, setLocation] = useLocation();

	if (error) return <Loading msg={"Error " + error.message} isError="true" />;
	if (isLoading) return <Loading />;

	const pageData = useMemo(() => {
		return paginateArray(data, page, 12);
	}, [data, page]);

	if (pageData.currentPage < 1 || page > pageData.totalPages) {
		return <Loading msg={"Error: Out of Page"} isError />;
	}
	useDocumentTitle("Artist List - "+ segment.toUpperCase());
	return (
		<div class="block p-2">
			<div class="flex flex-row flex-wrap justify-between sm:flex-row">
				{pageData.data.map((item, i) => {
					return (
						<div
							key={i}
							class="flex flex-col p-1 w-full sm:w-5/12 md:w-3/12 flex-wrap"
						>
							<Link
								class="hover:bg-gray-100 font-black text-gray-700 hover:text-gray-900 capitalize underline"
								href={"/artist/" + item.PATH}
							>
								{item.ARTIST_NAME}
							</Link>
						</div>
					);
				})}
			</div>
			{/* Pagination */}
			<div class="flex justify-between mt-3">
				{pageData.currentPage !== 1 ? (
					<Link
						class="px-4 py-2 text-gray-700 hover:text-gray-900 font-black"
						href={"/browse/" + segment + "/" + (page - 1)}
					>
						&laquo; Prev
					</Link>
				) : null}
				{page < pageData.totalPages ? (
					<Link
						class="px-4 py-2 text-gray-700 hover:text-gray-900 font-black"
						href={"/browse/" + segment + "/" + (page + 1)}
					>
						Next &raquo;
					</Link>
				) : null}
			</div>
		</div>
	);
}

export function SegmentSongList({ segment }) {
	const { error, isLoading, data } = useLirik(segment);
	const [location, setLocation] = useLocation();

	if (error) return <Loading msg={"Error: No Artist Found!!"} isError="true" />;
	if (isLoading) return <Loading />;

	useDocumentTitle("Song List - "+ segment.toUpperCase());
	return (
		<div class="block p-2">
			<div class="flex flex-row flex-wrap justify-between sm:flex-row">
				{data.map((item, i) => {
					return (
						<div
							key={i}
							class="flex flex-col p-1 w-full sm:w-5/12 md:w-3/12 flex-wrap"
						>
							<Link
								class="hover:bg-gray-100 font-black text-gray-700 hover:text-gray-900 capitalize underline"
								href={"/song/" + item.SONG_PATH}
							>
								{item.SONG_NAME}
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export function SegmentSongDetail({ segment }) {
	const { error, isLoading, data } = useLirik(segment);
	const [location, setLocation] = useLocation();

	if (error) return <Loading msg={"Error: No Song Found!!"} isError="true" />;
	if (isLoading) return <Loading />;
	const lyrics = data.LYRICS.split(",").map((l, i) => {
		return (
			<p key={i} class="mb-4 capitalize">
				{l},
			</p>
		);
	});
	useDocumentTitle(data.ARTIST_NAME.toUpperCase() + " - " + data.SONG_NAME.toUpperCase());
	return (
		<div class="block p-2">
			<div class="flex flex-col flex-wrap">
				<div class=""></div>
				<div class="mb-4 border-b border-gray-200 text-center">
					<h2 class="capitalize text-2xl font-black text-gray-700">
						{data.SONG_NAME}
					</h2>
					<span class="capitalize text-sm font-black text-gray-500">
						{data.ARTIST_NAME}
					</span>
				</div>
				<div>{lyrics}</div>
			</div>
		</div>
	);
}
