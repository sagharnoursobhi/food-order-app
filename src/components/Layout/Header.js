import classes from './header.module.css';
import { Fragment } from 'react';
import MealImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

export default function Header({ showCard }) {
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton showCard={showCard} />
            </header>
            <div className={classes['main-image']}><img src={MealImage} alt="A table full of delicious food" /></div>
        </Fragment>
    )
}
