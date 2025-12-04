<?php
// process_form.php
// Simple server-side processing for the booking form.

$name        = htmlspecialchars($_POST['name'] ?? '');
$email       = htmlspecialchars($_POST['email'] ?? '');
$phone       = htmlspecialchars($_POST['phone'] ?? '');
$sessionType = htmlspecialchars($_POST['sessionType'] ?? '');
$date        = htmlspecialchars($_POST['date'] ?? '');
$location    = htmlspecialchars($_POST['location'] ?? '');
$message     = nl2br(htmlspecialchars($_POST['message'] ?? ''));
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Booking Request Received | Tonga Footprint Portraits</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="finalproject.css">
</head>
<body>
<header>
  <h1>Tonga Footprint Portraits</h1>
  <p class="tagline">Capturing footprints of faith, family, and culture.</p>
</header>

<main>
  <h2>Thank You<?php echo $name ? ", $name" : ""; ?>!</h2>
  <p>Your booking request has been received. Here is what you sent:</p>

  <ul>
    <li><strong>Name:</strong> <?php echo $name; ?></li>
    <li><strong>Email:</strong> <?php echo $email; ?></li>
    <li><strong>Phone:</strong> <?php echo $phone; ?></li>
    <li><strong>Session Type:</strong> <?php echo $sessionType; ?></li>
    <li><strong>Preferred Date:</strong> <?php echo $date; ?></li>
    <li><strong>Location:</strong> <?php echo $location; ?></li>
  </ul>

  <h3>Your Message</h3>
  <p><?php echo $message; ?></p>

  <p>You can now go back to the <a href="finalproject.html">home page</a>.</p>
</main>

<footer>
  <p>&copy; 2025 Tonga Footprint Portraits. All rights reserved.</p>
</footer>
</body>
</html>
