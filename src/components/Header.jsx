import chefLogo from "../assets/chef-claude-icon.png"

export default function Header() {
    return (
        <header>
            <img src={chefLogo} alt="chef-logo" />
            <h1>Chef Claude</h1>
        </header>
    )
}