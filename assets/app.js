$(function() {

      $.ajax({
        url: 'https://api.tfl.gov.uk/line/mode/tube/status',
        success: function(response) {
          var lines = response;
          for(var i = 0; i < lines.length; i++) {
            var line = lines[i];

            $('#lines').append(
              '<li class="line list-group-item ' + line['id'] + '">' + 
              line['name'] + 
              '<span class="badge">' + line.lineStatuses[0].statusSeverityDescription + '</span>' +
              '</li>'
            );
          }
        }
      });
    
    });