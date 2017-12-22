function zSearchAnim(target, options) {
    this.target = document.getElementById(target);
    if (this.target == null) {
        console.error("zSearchAnim Error: No element with ID " + target + " was found.");
        return;
    }
    this.dimension = (options && options.dimension) || '250px';
    this.color = (options && options.color) || '#000';
    this.circleWidth = (options && options.circleWidth) || '5px';
    this.armWidth = (options && options.armWidth) || '5%';

    this.target.className += ' zSearchAnim';
    this.target.style.width = this.target.style.height = this.dimension;

    var circle = document.createElement("div");
    circle.className = 'circle';
    console.log(this.circleWidth + ' soild ' + this.color);
    circle.style.border = this.circleWidth + ' solid ' + this.color;


    var arm = document.createElement("div");
    arm.className = 'arm';

    var armS = document.createElement("div");
    armS.className = 'arm-s';

    arm.style.width = armS.style.width = this.armWidth;
    arm.style.background = armS.style.background = this.color;

    this.target.appendChild(circle);
    this.target.appendChild(arm);
    this.target.appendChild(armS);
}
zSearchAnim.prototype.searchStart = function() {
    this.target.className += ' clock';
};