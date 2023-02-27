import React from "react";
import Card from "./Card";

const Board = () => {
    return (
        <div className="Board">
            <Card resource='Duolingo' price='Free' imagePath='src/assets/duolingo.png' buttonLink='https://www.duolingo.com/' />
            <Card resource='Rosetta Stone' price='$12 per month for 3 months' imagePath='src/assets/rosetta_stone.png' buttonLink='https://www.rosettastone.com/' />
            <Card resource='Babbel' price='$11.15 per month for 6 months' imagePath='src/assets/babbel.png' buttonLink='https://www.babbel.com/' />
            <Card resource='Memrise' price='$8.49 per month' imagePath='src/assets/memrise.png' buttonLink='https://www.memrise.com/' />
            <Card resource='Drops' price='$13 per month' imagePath='src/assets/drops.png' buttonLink='https://languagedrops.com/' />
            <Card resource='Busuu' price='$6.95 per month for 1 year' imagePath='src/assets/busuu.png' buttonLink='https://www.busuu.com/' />
            <Card resource='Mondly' price='$9.99 per month' imagePath='src/assets/mondly.png' buttonLink='https://www.mondly.com/' />
            <Card resource='Lingvist' price='$9.99 per month for 1 year' imagePath='src/assets/lingvist.png' buttonLink='https://lingvist.com/' />
            <Card resource='Pimsleur' price='$20.90 per month for all access subscription' imagePath='src/assets/pimsleur.png' buttonLink='https://www.pimsleur.com/' />
            <Card resource='Yabla' price='$12.95 per month' imagePath='src/assets/yabla.jpeg' buttonLink='https://www.yabla.com/' />
        </div>
    )
}

export default Board;