pub fn fizzbuzz(num:u32) -> String{

    match (num % 3, num % 5) {
        (0, 0) => "FizzBuzz".to_string(),
        (0, _) => "Fizz".to_string(),
        (_, 0) => "Buzz".to_string(),
        _ => num.to_string()
    }
}

#[cfg(test)]
mod test{
    use super::*;

    #[test]
    fn default_return_strigified_value() {
        assert_eq!(fizzbuzz(1), "1");
        assert_eq!(fizzbuzz(2), "2");
    }

    #[test]
    fn multiple_of_three_return_fizz(){
        assert_eq!(fizzbuzz(3), "Fizz");
        assert_eq!(fizzbuzz(6), "Fizz");
    }

    #[test]
    fn multiple_of_five_return_buzz(){
        assert_eq!(fizzbuzz(5), "Buzz");
        assert_eq!(fizzbuzz(10), "Buzz");
    }

    #[test]
    fn multiple_of_three_and_five_return_fizzbuzz(){
        assert_eq!(fizzbuzz(15), "FizzBuzz");
        assert_eq!(fizzbuzz(30), "FizzBuzz");
    }

}
