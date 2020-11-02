 var flag=1;
            function next()
            {
                if(flag==1){
                    var x=document.querySelector('#imageTag').getAttribute('src');
                    var y=0;
                    var z="";
                    if(x.charAt(15)=='.')
                    {
                        y=parseInt(x.charAt(14));
                        y++;
                        z = x.slice(0,14) + y.toString() +x.slice(15,x.length+1);
                    }
                    else
                    {
                        y=parseInt(x.slice(14,16));
                        if(y!=38)
                        {
                            y++;
                            z = x.slice(0,14) + y.toString() +x.slice(16,x.length+1);
                        }
                        else
                            z= x;
                    }
                    document.querySelector('#imageTag').setAttribute('src', z);
                }
                flag=0;
            }
            function prev()
            {
                
                var x=document.querySelector('#imageTag').getAttribute('src');
                var y=0;
                var z="";
                if(x.charAt(15)=='.')
                {
                    y=parseInt(x.charAt(14));
                    if(y!=1)
                    {
                        y--;
                        z = x.slice(0,14) + y.toString() +x.slice(15,x.length+1);
                    }
                    else
                    {
                        z=x;
                    }
                }
                else
                {
                    y=parseInt(x.slice(14,16));
                    y--;
                    z = x.slice(0,14) + y.toString() +x.slice(16,x.length+1);
                }
                document.querySelector('#imageTag').setAttribute('src', z);

            }
            
            document.querySelector('#boxId1').addEventListener('mouseenter', function(){
                setTimeout(next, 2000);
            });
            document.querySelector('#boxId1').addEventListener('mouseleave', function(){
                flag=1;
            });