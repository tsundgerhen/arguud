module Main (main) where


factorial :: Integer -> Integer
factorial 0 = 1
factorial n = n * factorial (n - 1)

main :: IO ()
main = do
    putStrLn "First test case is factorial of 5. Right answer is 120."
    putStrLn $ "Factorial function result for 5: " ++ show (factorial 5)
    putStrLn $ "Test result: " ++ if factorial 5 == 120 then "Passed" else "Failed"

    putStrLn "Second test case is factorial of 10. Right answer is 3628800."
    putStrLn $ "Factorial function result for 10: " ++ show (factorial 10)
    putStrLn $ "Test result: " ++ if factorial 10 == 3628800 then "Passed" else "Failed"
