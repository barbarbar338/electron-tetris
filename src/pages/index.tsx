import { useEffect, type FC } from "react";
import Tetris from "react-tetris";
import { useLocalStorage } from "react-use";
import { Layout } from "../components/Layout";
import { abbreviate } from "../utils/abbreviate";

export const IndexPage: FC = () => {
	const [highScore, setHighScore] = useLocalStorage("high_score", 0);

	useEffect(() => {
		document.onkeydown = (e) => e.preventDefault();
	}, []);

	return (
		<Layout>
			<Tetris>
				{({
					HeldPiece,
					Gameboard,
					PieceQueue,
					points,
					linesCleared,
					controller,
				}) => (
					<section className="flex relative items-center mt-5 flex-col">
						<>
							<div className="flex">
								<div className="w-1/2 px-2">
									<HeldPiece />
								</div>
								<div className="w-1/2 px-2">
									<p className="line-clamp-2">
										Points: {abbreviate(points)}
									</p>
									<p className="line-clamp-2">
										Cleared: {abbreviate(linesCleared)}
									</p>
									<p className="line-clamp-2">
										Best: {abbreviate(highScore || 0)}
									</p>
									<p
										className="underline text-blue-500 hover:text-blue-600 cursor-pointer"
										onClick={controller.restart}
									>
										Restart
									</p>
								</div>
							</div>
							<div className="flex">
								<div className="px-2">
									<Gameboard />
								</div>
								<div className="px-2">
									<PieceQueue />
								</div>
							</div>
							{points > (highScore || 0)
								? setHighScore(points)
								: ""}
						</>
					</section>
				)}
			</Tetris>
		</Layout>
	);
};
