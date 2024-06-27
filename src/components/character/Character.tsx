import {ICharacter} from "../../models/ICharacter";
import React, {FC, ReactNode} from "react";
import styles from "./character.module.css";


type IProps = {
    character: ICharacter
};

const Character: FC<IProps> = ({character}) => {
    const {
        name,
        surname,
        age,
        profession,
        info,
        photo
    } = character;

    return (
        <div className={styles.backround}>
            <div className={styles.decorateCharacter}>
                <h2 className={styles.title}>{name} {surname}</h2>
                <img src={photo} alt={name} className={styles.image}/>
                <p className={styles.text}><b>Age:</b> {age}</p>
                <p className={styles.text}><b>Profession: </b>{profession}</p>
                <p className={styles.text}><b>Information: </b> {info}</p>
            </div>
        </div>)

}

export default Character;