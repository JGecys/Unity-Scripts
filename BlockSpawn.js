#pragma strict

var Block : GameObject;

var CountX : int;
var CountY : int;

var MarginX : float;
var MarginY : float;

var CenteredX : boolean;
var CenteredY : boolean;
var LinePushed : boolean;

private var BlockX : float;
private var BlockY : float;

function Start () {
	var BlockComponent = Block.GetComponent(BoxCollider2D);
	BlockX = BlockComponent.size.x;
	BlockY = BlockComponent.size.y;
	Generate();
}

function Update () {

}

function Generate() {
	var StartingPoint : Vector2;
	StartingPoint = getStartingPoint();
	for(var i = 0; i < CountY; i++){
		var posX : float = StartingPoint.x;
		if(i == 0 || i % 2 == 0){
			if(LinePushed){
				posX += BlockX /2;
			}
		}
		for(var j = 0; j < CountX; j++){
			Instantiate(
					Block,
					Vector2(posX + BlockX * j + MarginX * j, StartingPoint.y +BlockY *i+MarginY *i), 
					Block.transform.rotation
					);
		}
	}
	
}

function getStartingPoint() {
	var DistanceX : float;
	var DistanceY : float;
	if(CenteredX){
		DistanceX = ((BlockX * CountX + MarginX * (CountX-1)) - BlockX) / 2;
	}
	else DistanceX = 0;
	if(CenteredY){
		DistanceY = ((BlockY * CountY + MarginY * (CountY-1)) - BlockY) / 2;
	}
	else DistanceY = 0;
	
	return transform.position - Vector2(DistanceX, DistanceY);
}