

pub fn fizzbuzz(num:u32) -> String {

    if num % 3 == 0 && num % 5 == 0 {
        return String::from("FizzBuzz");
    } else if num % 3 == 0 {
        return String::from("Fizz");
    } else if num % 5 == 0 {
        return String::from("Buzz");
    }

    num.to_string()
}


#[cfg(test)]
mod test{
    use crate::fizzbuzz;

    #[test]
    fn default_test() {
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
