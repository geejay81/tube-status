$(function() {

      $.ajax({
        url: 'https://api.tfl.gov.uk/line/mode/tube/status',
        success: function(response) {
          var lines = response;
          for(var i = 0; i < lines.length; i++) {
            var line = lines[i];
            var disruptions = Number(line['disruptions']).count;
        
            $('#lines').append(
              '<li class="line list-group-item">' + line['name'] + '<span class="badge">' + disruptions + '</span></li>'
            );
          }
        }
      });
    
    });