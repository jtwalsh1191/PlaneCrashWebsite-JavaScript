
$(function () {
    /**
     * These operations binds a click event to the LIST tab
     */

     

    $("#btn-list-all").click(function(event){
        event.preventDefault();
        console.log("This button is working")
        $("#list-crashes").empty();
        /**  Assembling the table everytime the button is clicked.
            This will make sure that if things are added, deleted or modified in the other tab,
            this table will be always up to date.
        */

        let tbl = `<table  id="table-list">
        <tr>
            <th class="labeldb">Date</th>
            <th class="labeldb">Time</th>
            <th class="labeldb">Location</th>
            <th class="labeldb">Aboard</th>
            <th class="labeldb">Fatalities</th>
            <th class="labeldb">Summary</th>
        </tr>
      </table>`
        


        $("#list-crashes").append(tbl);
        // Here we query the server-side
        $.ajax({
            url: '/crashes',
            type: 'GET',
            contentType: 'application/json',                        
            success: function(response){
                console.log(response);
                for(let i = 0; i < response.length; i++) {
                    let obj = response[i];
                    let tbl_line='';
                    /**  To add an effect in the table, we can apply
                         even and odd classes. */                    
                    if (i%2 ==0){
                        tbl_line = '<tr class="even-row" ><td>'+obj.Date+'</td><td>'+obj.Time+'</td><td>'+obj.Location+'</td><td>'+obj.Aboard+'</td><td>'+obj.Fatalities+'</td><td>'+obj.Summary+'</td></tr>';

                    }else{
                        tbl_line = '<tr class="odd-row" ><td>'+obj.Date+'</td><td>'+obj.Time+'</td><td>'+obj.Location+'</td><td>'+obj.Aboard+'</td><td>'+obj.Fatalities+'</td><td>'+obj.Summary+'</td></tr>';
                    }                    
                    $("#table-list").append(tbl_line)
                }
            },
            // If there's an error, we can use the alert box to make sure we understand the problem
            error: function(xhr, status, error){
                var errorMessage = xhr.status + ': ' + xhr.statusText
                alert('Error - ' + errorMessage);
            }
        });
    });

    $("#btn-list-fatGL").click(function(event){
        event.preventDefault();
        console.log("Sorted button is working")
        $("#list-crashes").empty();
        /**  Assembling the table everytime the button is clicked.
            This will make sure that if things are added, deleted or modified in the other tab,
            this table will be always up to date.
        */

        let tbl = `<table id="table-list">
        <h3><tr>
          <th class="labeldb">Date</th>
          <th class="labeldb">Time</th>
          <th class="labeldb">Location</th>
          <th class="labeldb">Aboard</th>
          <th class="labeldb">Fatalities</th>
          <th class="labeldb">Summary</th>
        </tr>
      </table>`
        


        $("#list-crashes").append(tbl);
        // Here we query the server-side
        $.ajax({
            url: '/CrashSortByFatalitiesGL',
            type: 'GET',
            contentType: 'application/json',                        
            success: function(response){
                console.log(response);
                for(let i = 0; i < response.length; i++) {
                    let obj = response[i];
                    let tbl_line='';
                    /**  To add an effect in the table, we can apply
                         even and odd classes. */                    
                    if (i%2 ==0){
                        tbl_line = '<tr class="even-row"><td>'+obj.Date+'</td><td>'+obj.Time+'</td><td>'+obj.Location+'</td><td>'+obj.Aboard+'</td><td>'+obj.Fatalities+'</td><td>'+obj.Summary+'</td>';

                    }else{
                        tbl_line = '<tr class="odd-row"><td>'+obj.Date+'</td><td>'+obj.Time+'</td><td>'+obj.Location+'</td><td>'+obj.Aboard+'</td><td>'+obj.Fatalities+'</td><td>'+obj.Summary+'</td>';
                    }                    
                    $("#table-list").append(tbl_line)
                }
            },
            // If there's an error, we can use the alert box to make sure we understand the problem
            error: function(xhr, status, error){
                var errorMessage = xhr.status + ': ' + xhr.statusText
                alert('Error - ' + errorMessage);
            }
        });
    });
    
    $("#btn-list-fatLG").click(function(event){
        event.preventDefault();
        console.log("Sorted button is working")
        $("#list-crashes").empty();
        /**  Assembling the table everytime the button is clicked.
            This will make sure that if things are added, deleted or modified in the other tab,
            this table will be always up to date.
        */

        let tbl = `<table id="table-list">
        <h3><tr>
          <th class="labeldb">Date</th>
          <th class="labeldb">Time</th>
          <th class="labeldb">Location</th>
          <th class="labeldb">Aboard</th>
          <th class="labeldb">Fatalities</th>
          <th class="labeldb">Summary</th>
        </tr>
      </table>`
        


        $("#list-crashes").append(tbl);
        // Here we query the server-side
        $.ajax({
            url: '/CrashSortByFatalitiesLG',
            type: 'GET',
            contentType: 'application/json',                        
            success: function(response){
                console.log(response);
                for(let i = 0; i < response.length; i++) {
                    let obj = response[i];
                    let tbl_line='';
                    /**  To add an effect in the table, we can apply
                         even and odd classes. */                    
                    if (i%2 ==0){
                        tbl_line = '<tr class="even-row"><td>'+obj.Date+'</td><td>'+obj.Time+'</td><td>'+obj.Location+'</td><td>'+obj.Aboard+'</td><td>'+obj.Fatalities+'</td><td>'+obj.Summary+'</td>';

                    }else{
                        tbl_line = '<tr class="odd-row"><td>'+obj.Date+'</td><td>'+obj.Time+'</td><td>'+obj.Location+'</td><td>'+obj.Aboard+'</td><td>'+obj.Fatalities+'</td><td>'+obj.Summary+'</td>';
                    }                    
                    $("#table-list").append(tbl_line)
                }
            },
            // If there's an error, we can use the alert box to make sure we understand the problem
            error: function(xhr, status, error){
                var errorMessage = xhr.status + ': ' + xhr.statusText
                alert('Error - ' + errorMessage);
            }
        });
    });

    $("#btn-list-aboGL").click(function(event){
        event.preventDefault();
        console.log("Sorted button is working")
        $("#list-crashes").empty();
        /**  Assembling the table everytime the button is clicked.
            This will make sure that if things are added, deleted or modified in the other tab,
            this table will be always up to date.
        */

        let tbl = `<table id="table-list">
        <h3><tr>
          <th class="labeldb">Date</th>
          <th class="labeldb">Time</th>
          <th class="labeldb">Location</th>
          <th class="labeldb">Aboard</th>
          <th class="labeldb">Fatalities</th>
          <th class="labeldb">Summary</th>
        </tr>
      </table>`
        


        $("#list-crashes").append(tbl);
        // Here we query the server-side
        $.ajax({
            url: '/CrashSortByAboardGL',
            type: 'GET',
            contentType: 'application/json',                        
            success: function(response){
                console.log(response);
                for(let i = 0; i < response.length; i++) {
                    let obj = response[i];
                    let tbl_line='';
                    /**  To add an effect in the table, we can apply
                         even and odd classes. */                    
                    if (i%2 ==0){
                        tbl_line = '<tr class="even-row"><td>'+obj.Date+'</td><td>'+obj.Time+'</td><td>'+obj.Location+'</td><td>'+obj.Aboard+'</td><td>'+obj.Fatalities+'</td><td>'+obj.Summary+'</td>';

                    }else{
                        tbl_line = '<tr class="odd-row"><td>'+obj.Date+'</td><td>'+obj.Time+'</td><td>'+obj.Location+'</td><td>'+obj.Aboard+'</td><td>'+obj.Fatalities+'</td><td>'+obj.Summary+'</td>';
                    }                    
                    $("#table-list").append(tbl_line)
                }
            },
            // If there's an error, we can use the alert box to make sure we understand the problem
            error: function(xhr, status, error){
                var errorMessage = xhr.status + ': ' + xhr.statusText
                alert('Error - ' + errorMessage);
            }
        });
    });

    $("#btn-list-aboLG").click(function(event){
        event.preventDefault();
        console.log("Sorted button is working")
        $("#list-crashes").empty();
        /**  Assembling the table everytime the button is clicked.
            This will make sure that if things are added, deleted or modified in the other tab,
            this table will be always up to date.
        */

        let tbl = `<table id="table-list">
        <h3><tr>
          <th class="labeldb">Date</th>
          <th class="labeldb">Time</th>
          <th class="labeldb">Location</th>
          <th class="labeldb">Aboard</th>
          <th class="labeldb">Fatalities</th>
          <th class="labeldb">Summary</th>
        </tr>
      </table>`
        


        $("#list-crashes").append(tbl);
        // Here we query the server-side
        $.ajax({
            url: '/CrashSortByAboardLG',
            type: 'GET',
            contentType: 'application/json',                        
            success: function(response){
                console.log(response);
                for(let i = 0; i < response.length; i++) {
                    let obj = response[i];
                    let tbl_line='';
                    /**  To add an effect in the table, we can apply
                         even and odd classes. */                    
                        if (i%2 ==0){
                            tbl_line = '<tr class="even-row"><td>'+obj.Date+'</td><td>'+obj.Time+'</td><td>'+obj.Location+'</td><td>'+obj.Aboard+'</td><td>'+obj.Fatalities+'</td><td>'+obj.Summary+'</td>';

                        }else{
                            tbl_line = '<tr class="odd-row"><td>'+obj.Date+'</td><td>'+obj.Time+'</td><td>'+obj.Location+'</td><td>'+obj.Aboard+'</td><td>'+obj.Fatalities+'</td><td>'+obj.Summary+'</td>';
                        }  

                    $("#table-list").append(tbl_line)
                }
            },
            // If there's an error, we can use the alert box to make sure we understand the problem
            error: function(xhr, status, error){
                var errorMessage = xhr.status + ': ' + xhr.statusText
                alert('Error - ' + errorMessage);
            }
        });
    });

    $("#btn-list-top").click(function(event){
        event.preventDefault();
        console.log("Sorted button is working")
        $("#list-crashes").empty();
        /**  Assembling the table everytime the button is clicked.
            This will make sure that if things are added, deleted or modified in the other tab,
            this table will be always up to date.
        */

        let tbl = `<table id="top-list">
        <tr>
            <th class="labeldb">Date</th>
            <th class="labeldb">Location</th>
            <th class="labeldb">Fatalities</th>
            <th class="labeldb">Summary</th>
        </tr>
      </table>`
        


        $("#list-crashes").append(tbl);
        // Here we query the server-side
        $.ajax({
            url: '/topCrashes',
            type: 'GET',
            contentType: 'application/json',                        
            success: function(response){
                console.log(response);
                for(let i = 0; i < response.length; i++) {
                    let obj = response[i];
                    let tbl_line='';
                
                    /**  To add an effect in the table, we can apply
                         even and odd classes. */                    
                         if (i%2 ==0){
                            tbl_line = '<tr class="even_row"><td>'+obj.Date+'</td><td>'+obj.Location+'</td><td>'+obj.Fatalities+'</td><td>'+obj.Summary+'</td>';
    
                        }else{
                            tbl_line = '<tr class="odd_row"><td>'+obj.Date+'</td><td>'+obj.Location+'</td><td>'+obj.Fatalities+'</td><td>'+obj.Summary+'</td>';
                        }   
                                      
                    $("#top-list").append(tbl_line)
                }
            },
            // If there's an error, we can use the alert box to make sure we understand the problem
            error: function(xhr, status, error){
                var errorMessage = xhr.status + ': ' + xhr.statusText
                alert('Error - ' + errorMessage);
            }
        });
    });
});  