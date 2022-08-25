import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { Loading } from "../components";
import Wrapper from "../assets/wrappers/Stats";

const Stats = () => {
	const { getUserStats, stats } = useAppContext();
	useEffect(() => {
		if (stats.length === 0) {
			getUserStats();
		}
		// eslint-disable-next-line
	}, [stats]);

	return (
		<Wrapper>
			<div className="stats-container">
				<h1>Stats</h1>
				{stats.length !== 0 ? (
					<div className="stats">
						<div className="primary">
							<h2>Primary Stats</h2>
							<p>Health : {stats.health}</p>
							<p>Strength : {stats.strength.effective}</p>
							<p>Agility : {stats.agility.effective}</p>
							<p>Intellect : {stats.intellect.effective}</p>
							<p>Stamina : {stats.stamina.effective}</p>
						</div>
						<div className="secondary">
							<h2>Secondary Stats</h2>
							<p>Crit chance : {Math.round(stats.melee_crit.value)} %</p>
							<p>Haste : {Math.round(stats.melee_haste.value)} %</p>
							<p>Mastery : {Math.round(stats.mastery.value)} %</p>
							<p>Versatility : {Math.round(stats.versatility_damage_done_bonus)} %</p>
						</div>
						<div className="tertiary">
							<h2>Tertiary Stats</h2>
							<p>
								{Math.round(stats.avoidance.rating_bonus) > 0
									? `Avoidance : ${Math.round(stats.avoidance.rating_bonus)} %`
									: null}
							</p>
							<p>
								{Math.round(stats.lifesteal.rating_bonus) > 0
									? `Leech : ${Math.round(stats.lifesteal.rating_bonus)} %`
									: null}
							</p>
							<p>
								{Math.round(stats.speed.rating_bonus) > 0
									? `Speed : ${Math.round(stats.speed.rating_bonus)} %`
									: null}
							</p>
							<p>
								{Math.round(stats.block.rating_bonus) > 0
									? `Block : ${Math.round(stats.block.rating_bonus)} %`
									: null}
							</p>
							<p>
								{Math.round(stats.parry.value) > 0
									? `Parry : ${Math.round(stats.parry.value)} %`
									: null}
							</p>
						</div>
					</div>
				) : (
					<Loading />
				)}
			</div>
		</Wrapper>
	);
};

export default Stats;
