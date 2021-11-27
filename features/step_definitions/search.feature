Feature: Booking tickets
    Scenario: Should booking one ticket
        Given user is on 'http://qamid.tmweb.ru/client/index.php' page
        When user choose day 
        When user choose time 
        When user select 1 row 1 seat 
        When user click button 
        When user click receive QR 
        Then user see text 'Покажите QR-код нашему контроллеру для подтверждения бронирования.'

    Scenario: Should booking two tickets
        Given user is on 'http://qamid.tmweb.ru/client/index.php' page
        When user choose day 
        When user choose time 
        When user select 1 row 2 seat
        When user select 1 row 3 seat
        When user click button 
        When user click receive QR 
        Then user see text 'Покажите QR-код нашему контроллеру для подтверждения бронирования.'

   Scenario: Should booking a booked ticket
        Given user is on 'http://qamid.tmweb.ru/client/index.php' page
        When user choose day 
        When user choose time
        When user select the booked place
        Then user see button disabled 'true'