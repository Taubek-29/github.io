class Cube { 
    constructor (game) { 
        this. geometry = {
            pieceCornerRadius: 0.12,
            edgeCornerRoundness: 0.15,
            edgeScale: 0.82, 
            edgeDepth: 0.01
        };

        this.holder = new THREE.Object3D(); 
        this.object = new THREE.Object3D(); 
        this.animator = new THREE.Object3D();

        this.holder.add(this.animator); 
        this.animator.add(this.object);
        
        this.game.world.scene.add(this.holder);
    }
}