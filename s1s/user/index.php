<body><?php
$u = $_REQUEST["user_id"];
$str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567891011121314151617181920212223242526';
$shuffled = str_shuffle($str);
    

$str1 = substr($shuffled,1,30);
$str2 = substr_replace($str1, 'a', -22, -20);
 $strn = substr($str2, -21, 1); 
echo $strn;

?>
<style></style>hello</body>
