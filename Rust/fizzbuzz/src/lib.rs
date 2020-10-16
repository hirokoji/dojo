

pub fn fizzbuzz(num:u32) -> Option<&'static str> {

    if num % 3 == 0 && num % 5 == 0 {
        return Some("FizzBuzz");
    }
    else if num % 3 == 0 {
        return Some("Fizz")
    } else if num % 5 == 0 {
        return Some("Buzz")
    }
    None
}


#[cfg(test)]
mod test{
    use crate::fizzbuzz;

    #[test]
    fn default_test() {
        assert_eq!(fizzbuzz(1), None);
    }

    #[test]
    fn multiple_of_three_return_fizz(){
        assert_eq!(fizzbuzz(3), Some("Fizz"));
    }

    #[test]
    fn multiple_of_five_return_buzz(){
        assert_eq!(fizzbuzz(5), Some("Buzz"));
    }

    #[test]
    fn multiple_of_three_and_five_return_fizzbuzz(){
        assert_eq!(fizzbuzz(15), Some("FizzBuzz"));
    }
}
