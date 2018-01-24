//Working with OOP approach Singly Link Lists

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    push(data){
        //initialization of a structure for data
        let node = {
            value: data,
            next: null 
        }
        //here we check to see if the head acually holds a node
        if(!this.head){
            this.head = node;
        }else{
            //head already exists, we must iterate through the list
            //loop terminates upon tail "ptr" being incountered
            curr_node = this.head;
            while(curr_node.next){
                curr_node = curr_node.next;
            }
            //forming link at tail "ptr"
            curr_node.next = node;
        }
        this.size++;
    }

    rmv_node(data){
        var curr_node = this.head;
        //Here we check to see if target data is in first node
        if(curr_node.value == data)
        //simply remove head, point it to second node
            this.head = curr_node.next;
        else {
            var previous = curr_node;
            //Iterate so long as we dont reach tail "ptr"
            while(cur_node.next){
                if(curr_node.value == data){
                    //Form the link around current node,
                    //cutting it out
                    previous.next = cur_node.next;
                    break;
                }
                //moving pointers for iteration
                previous = curr_node;
                curr_node = curr_node.next;
            }
            // because of the nature of the while loop, we
            // must make one last check to see if data lies
            //within last node
            if(curr_node.value == data){
                previous.next == null;
            }
        }
    }

    searchPresence(data){
        var curr_node = this.head;
        var flag = false;
        if(curr_node.value == data)
        //data is present in head
            flag = true;
        else {
            //Iterate so long as we dont reach tail "ptr"
            while(curr_node.next){
                if(curr_node.value == data){
                    //Found data internally within list
                   flag = true;
                }
                //moving pointer for iteration
                curr_node = curr_node.next;
            }
            // because of the nature of the while loop, we
            // must make one last check to see if data lies
            //within last node
            if(curr_node.value == data){
                flag = true;
            }
        }
        return flag;
    } 
}