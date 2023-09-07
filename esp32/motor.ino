void toFront(){
  digitalWrite(gpi013, LOW);    
  digitalWrite(gpi027, LOW);    
  digitalWrite(gpi012, HIGH);    
  digitalWrite(gpi014, HIGH);                           
}

void toBack(){
  digitalWrite(gpi012, LOW);    
  digitalWrite(gpi014, LOW); 
  digitalWrite(gpi013, HIGH);    
  digitalWrite(gpi027, HIGH);                           
}

void turnRight(){
  digitalWrite(gpi013, LOW);    
  digitalWrite(gpi027, HIGH);    
  digitalWrite(gpi012, HIGH);    
  digitalWrite(gpi014, LOW);                           
}

void turnLeft(){
  digitalWrite(gpi013, HIGH);    
  digitalWrite(gpi027, LOW);    
  digitalWrite(gpi012, LOW);    
  digitalWrite(gpi014, HIGH);                           
}

void stopEngene(){
  digitalWrite(gpi013, LOW);
  digitalWrite(gpi012, LOW);
  digitalWrite(gpi014, LOW);
  digitalWrite(gpi027, LOW);
}
