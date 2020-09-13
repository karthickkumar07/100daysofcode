using System;

namespace csharp_files
{
    public class Program
    {
        public static void Main(string[] args)
        {
            // variable declaration
            int x = 100;
            string name = "hello karthick";
            float value = 3.4f;
            bool result = true;
            Console.WriteLine("variable results:" + x + name + value + result);

            // input from the user
            var input = Console.ReadLine();
            Console.WriteLine("Entered Input  is :" + input);

            // conditional operations
            var password = "spartanGethu";
            var confirmPassword = "spartanGethu";

            if (password == confirmPassword)
            {
                Console.WriteLine("Password matches");
            }
            else
            {
                Console.WriteLine("Password wrong");

            }

            //Typecasting convert datatype
            var inputvalue = Convert.ToInt32(Console.ReadLine());

            //switch statements
            switch (inputvalue)
            {
                case 0:
                    Console.WriteLine("zero ");
                    break;
                case 1:
                    Console.WriteLine("one");
                    break;
                default:
                    Console.WriteLine("default");
                    break;
            }

            //Looping statements
            int length = 5;
            for (int i = 0; i < length; i++)
            {
                Console.WriteLine(i);
            }

            while (length > 0)
            {
                Console.WriteLine("Line " + length--);
            }

            //array declaration
            int[] box = new int[10];
            int[] circle = { 1, 2, 3, 4, 5 };
            int start = 88;
            for (int i = 0; i < 10; i++)
            {
                box[i] = start;
                start = start * 2;
            }
            Console.WriteLine("The Input value is", +inputvalue);
            Console.WriteLine(box[inputvalue]);

            // method calling
            Method(4, 4);
            Method(2, 3);

            // assign func to value
            int val = cube(inputvalue);
            Console.WriteLine("The cubic value of " + inputvalue + " is:" + val);


            //string types
            string s = "karthick";
            Console.WriteLine(s.ToUpper());
        }
        public static void Method(int x, int y)
        {
            Console.WriteLine("Im a Function method outside main....");
            Console.WriteLine(x * y);
        }

        public static int cube(int n)
        {
            return n * n * n;
        }
    }
}
