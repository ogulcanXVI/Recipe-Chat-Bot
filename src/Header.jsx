import chefOgiLogo from "./chef-ogi-recipes.png"

export default function Header() {
    return (
        <header>
            <img src={chefOgiLogo}/>
            <h1>Chef Ogi Recipes</h1>
        </header>
    )
}