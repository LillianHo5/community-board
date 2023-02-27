import React from "react";
import Card from "./Card";

const Board = () => {
    return (
        <div className="Board">
            <Card resource='Duolingo' price='Free' imagePath='src/assets/duolingo.png' />
            <Card resource='Rosetta Stone' price='$12 per month for 3 months' imagePath='src/assets/rosetta_stone.png' />
            <Card resource='Babbel' price='$11.15 per month for 6 months' imagePath='src/assets/babbel.png' />
            <Card resource='Memrise' price='$8.49 per month' imagePath='src/assets/memrise.png' />
            <Card resource='Drops' price='$13 per month' imagePath='src/assets/drops.png' />
            <Card resource='Busuu' price='$6.95 per month for 1 year' imagePath='src/assets/busuu.png' />
            <Card resource='Mondly' price='$9.99 per month' imagePath='src/assets/mondly.png' />
            <Card resource='Lingvist' price='$9.99 per month for 1 year' imagePath='src/assets/lingvist.png' />
            <Card resource='Pimsleur' price='$20.90 per month for all access subscription' imagePath='src/assets/pimsleur.png' />
            <Card resource='Yabla' price='$12.95 per month' imagePath='src/assets/yabla.jpeg' />
        </div>
    )
}

export default Board;