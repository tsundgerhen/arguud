import scala.annotation.tailrec

object Main {
  def main(args: Array[String]): Unit = {
    println("-- Programming Paradigms Exercise3 task3. --")
    println(filterGreaterThanBase(Array(5, 21, 17, 4, 10, 15), 12, Array.empty[Int]).mkString(", "))
    println(isDaffodil(200, 0))
    println(isDaffodil(153, 0))
    println(countLetters("aadabcbbbcc", Map.empty[Char, Int]))
  }

  /** Function 1: filterGreaterThanBase
    *
    * Write a recursive function that can check whether the integers in an array
    * are greater than the base integer and print the 'GreaterThanBase' integers.
    */
  def filterGreaterThanBase(arr: Array[Int], base: Int, accumulator: Array[Int]): Array[Int] = {
    // Initialize an empty ArrayBuffer to store elements greater than base
    val resultBuffer = scala.collection.mutable.ArrayBuffer[Int]()

    // Iterate through the array and add elements greater than base to the resultBuffer
    for (i <- 0 until arr.size) {
      if (arr(i) > base) {
        resultBuffer += arr(i)
      }
    }

    // Convert the ArrayBuffer to an Array and return
    resultBuffer.toArray
  }

  /** Function 2: isDaffodil
    *
    * Write a recursive function that can check whether an integer is a Narcissistic integer.
    * Here, the given integer should be a non-negative integer less than 1000.
    */
  def isDaffodil(n: Int, sum: Int = 0): Boolean = {
    require(n >= 0 && n < 1000, "Input must be a non-negative integer less than 1000")
    var s = 0
    var temp = 0
    var m = n
    val c = n
    
    // Calculate the number of digits in n
    var num = n
    while (num > 0) {
      num = num / 10
      s += 1
    }

    // Calculate the sum of each digit raised to the power of the number of digits
    var remaining = n
    while (remaining > 0) {
      temp += math.pow(remaining % 10, s).toInt
      remaining = remaining / 10
    }

    // Check if the sum equals the original number
    temp == c
  }

  /** Function 3: countLetters
    *
    * Write a recursive function that can count how many times each letter occurs in a specific string.
    */
  @tailrec
  def countLetters(str: String, counts: Map[Char, Int]): Map[Char, Int] = {
    // Base case: if the string is empty, return the current counts
    if (str.isEmpty)
      counts
    else {
      // Get the first character of the string
      val char = str.head
      // Update the counts map
      val updatedCounts = counts + (char -> (counts.getOrElse(char, 0) + 1))
      // Recur with the rest of the string and the updated counts
      countLetters(str.tail, updatedCounts)
    }
  }
}