using System;
using System.Collections.Generic;
using System.Text;

namespace WalletPan.Framework.Dto
{
    public class ValiditionMessage
    {
        public bool Success { get; set; }
        public List<string> Message { get; set; } = new List<string>();

        public dynamic ResultData { get; set; }

        public void UnsuccessfulValidation(string message)
        {
            Success = false;
            Message.Add(message);
        }
    }

}
