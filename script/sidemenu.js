class SideNavbar{
    constructor(sMenu, navBar){
        this.sMenu = document.querySelector(sMenu);
        this.navBar = document.querySelector(navBar);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this)
    }


    handleClick(){
        this.navBar.classList.toggle(this.activeClass);
    }

    addClickEvent(){
        this.sMenu.addEventListener("click" , this.handleClick);

    }

    init(){
        if (this.sMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const sideNavbar = new SideNavbar(
    ".s-menu", 
    ".navbar",
    ".navbar a",
);

sideNavbar.init();